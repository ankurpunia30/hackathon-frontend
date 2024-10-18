// src/Graph.js
import React, { useEffect } from 'react';
import Cytoscape from 'cytoscape';
import cytoscapeQtip from 'cytoscape-qtip';
import $ from 'jquery'; // qTip requires jQuery

cytoscapeQtip(Cytoscape, $);

const Graph = () => {
  const elements = [
    // Define nodes
    { data: { id: 'Threads', category: 'Concept', content: 'Threads are the smallest unit of process execution.' }},
    { data: { id: 'Process', category: 'Concept', content: 'A process is an instance of a program being executed.' }},
    { data: { id: 'Web Browser', category: 'Application', content: 'A web browser is an application used to access and display websites.' }},
    { data: { id: 'Word Processor', category: 'Application', content: 'A word processor is a software used for creating and editing text documents.' }},
    { data: { id: 'Powerpoint', category: 'Application', content: 'PowerPoint is a presentation software developed by Microsoft.' }},
    { data: { id: 'Kernels', category: 'Concept', content: 'The kernel is the core component of an operating system, managing system resources.' }},
    { data: { id: 'Multicore Programming', category: 'Concept', content: 'Multicore programming involves writing code that utilizes multiple CPU cores simultaneously.' }},
    { data: { id: 'Multicore Systems', category: 'Concept', content: 'Multicore systems have multiple processor cores in a single computing unit.' }},
    { data: { id: 'Concurrency', category: 'Concept', content: 'Concurrency is the ability to execute multiple tasks simultaneously.' }},
    { data: { id: 'Parallelism', category: 'Concept', content: 'Parallelism refers to the simultaneous execution of multiple computations.' }},
    { data: { id: 'Posix Pthreads', category: 'Library', content: 'POSIX Pthreads is a threading library that provides APIs for multithreaded programming.' }},
    { data: { id: 'Windows Threads', category: 'Library', content: 'Windows Threads is the threading model used by the Windows operating system.' }},
    { data: { id: 'Java Threads', category: 'Library', content: 'Java Threads is the thread handling system in the Java programming language.' }},
    { data: { id: 'Solaris', category: 'Operating system', content: 'Solaris is a Unix-based operating system developed by Sun Microsystems.' }},
    { data: { id: 'Linux', category: 'Operating system', content: 'Linux is an open-source operating system that supports various system architectures.' }},
    { data: { id: 'Mac Os X', category: 'Operating system', content: 'Mac OS X is Apple’s Unix-based operating system for Mac computers.' }},
    { data: { id: 'Ios', category: 'Operating system', content: 'iOS is the operating system used by Apple mobile devices like iPhones and iPads.' }},
    { data: { id: 'Android', category: 'Operating system', content: 'Android is an open-source operating system developed by Google for mobile devices.' }},
    { data: { id: 'Numa', category: 'Architecture', content: 'NUMA stands for Non-Uniform Memory Access, an architecture for multiprocessor systems.' }},
    { data: { id: 'Cpu Scheduling', category: 'Concept', content: 'CPU scheduling is about deciding which process to execute next.' }},
    { data: { id: 'Multithreaded Multicore System', category: 'Concept', content: 'A multithreaded multicore system allows multiple threads to execute on multiple cores.' }},
    
    // Define edges
    { data: { source: 'Threads', target: 'Process', Type: 'BELONGS_TO' }},
    { data: { source: 'Threads', target: 'Web Browser', Type: 'IMPLEMENTS' }},
    { data: { source: 'Threads', target: 'Word Processor', Type: 'IMPLEMENTS' }},
    { data: { source: 'Threads', target: 'Powerpoint', Type: 'IMPLEMENTS' }},
    { data: { source: 'Kernels', target: 'Threads', Type: 'MANAGES' }},
    { data: { source: 'Multicore Programming', target: 'Multicore Systems', Type: 'UTILIZES' }},
    { data: { source: 'Concurrency', target: 'Parallelism', Type: 'ENABLES' }},
    { data: { source: 'Posix Pthreads', target: 'Threads', Type: 'IMPLEMENTS' }},
    { data: { source: 'Windows Threads', target: 'Threads', Type: 'IMPLEMENTS' }},
    { data: { source: 'Java Threads', target: 'Threads', Type: 'IMPLEMENTS' }},
    { data: { source: 'Solaris', target: 'Threads', Type: 'SUPPORTS' }},
    { data: { source: 'Linux', target: 'Threads', Type: 'SUPPORTS' }},
    { data: { source: 'Mac Os X', target: 'Threads', Type: 'SUPPORTS' }},
    { data: { source: 'Ios', target: 'Threads', Type: 'SUPPORTS' }},
    { data: { source: 'Android', target: 'Threads', Type: 'SUPPORTS' }},
    { data: { source: 'Numa', target: 'Cpu Scheduling', Type: 'UTILIZES' }},
    { data: { source: 'Multithreaded Multicore System', target: 'Threads', Type: 'UTILIZES' }},
  ];

  useEffect(() => {
    const cy = Cytoscape({
      container: document.getElementById('cy'),
      elements: elements,
      style: [
        {
          selector: 'node',
          style: {
            shape: 'ellipse',
            width: '70px',
            height: '70px',
            backgroundColor: node => {
              switch (node.data('category')) {
                case 'Concept': return '#007BFF';
                case 'Application': return '#28A745';
                case 'Library': return '#FFC107';
                case 'Operating system': return '#FF5733';
                case 'Architecture': return '#6F42C1';
                default: return '#6C757D';
              }
            },
            label: 'data(id)', 
            color: '#000',
            'font-size': '12px', 
            'text-valign': 'center', 
            'text-halign': 'center',
            'text-wrap': 'wrap',     
            'text-max-width': '70px',
            
          },
        },
        {
          selector: 'edge',
          style: {
            width: 3,
            lineColor: '#2A9D8F', // Updated edge line color
            'target-arrow-color': '#2A9D8F', // Updated target arrow color
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            label: 'data(Type)',
            'font-size': '10px',
            'text-rotation': 'autorotate',
            'text-margin-y': 10,
            'text-background-color': '#000',
            'text-background-opacity': 0.8,
            'text-margin-x': 5,
          },
        },
      ],
      layout: {
        name: 'cose',
        idealEdgeLength: 150, 
        nodeRepulsion: 1200,
        edgeElasticity: 100,
        gravity: 0.1,
        numIter: 1500,
        animate: true,
        animationDuration: 1500,
        padding: 30,
      },
    });

    // Add tooltips to nodes (on hover)
    cy.nodes().forEach(node => {
      node.qtip({
        content: {
          text: node.data('content'), // Show node content on hover
        },
        position: {
          my: 'top center',
          at: 'bottom center',
        },
        style: {
          classes: 'qtip-bootstrap',
          tip: {
            width: 16,
            height: 8,
          },
        },
        show: {
          event: 'mouseover',
        },
        hide: {
          event: 'mouseout',
        },
      });
    });

    return () => {
      cy.destroy();
    };
  }, [elements]);

  return <div id="cy" style={{ width: '100%', height: '600px' }} />; // Maintain the same dimensions for the graph
};

export default Graph;
